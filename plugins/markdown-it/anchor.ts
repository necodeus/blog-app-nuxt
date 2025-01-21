import * as permalink from './permalink'

export const slugify = (s: any) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'))

function getTokensText (tokens: any) {
  return tokens
    .filter((t: any) => ['text', 'code_inline'].includes(t.type))
    .map((t: any) => t.content)
    .join('')
}

function uniqueSlug (slug: any, slugs: any, failOnNonUnique: any, startIndex: any) {
  let uniq = slug
  let i = startIndex

  if (failOnNonUnique && Object.prototype.hasOwnProperty.call(slugs, uniq)) {
    throw new Error(`User defined \`id\` attribute \`${slug}\` is not unique. Please fix it in your Markdown to continue.`)
  } else {
    while (Object.prototype.hasOwnProperty.call(slugs, uniq)) {
      uniq = `${slug}-${i}`
      i += 1
    }
  }

  slugs[uniq] = true

  return uniq
}

const isLevelSelectedNumber = (selection: any) => (level: any) => level >= selection
const isLevelSelectedArray = (selection: any) => (level: any) => selection.includes(level)

const anchor = function (md: any, opts: any) {
  opts = Object.assign({}, anchor.defaults, opts)

  md.core.ruler.push('anchor', (state: any) => {
    const slugs = {}
    const tokens = state.tokens

    const isLevelSelected = Array.isArray(opts.level)
      ? isLevelSelectedArray(opts.level)
      : isLevelSelectedNumber(opts.level)

    for (let idx = 0; idx < tokens.length; idx++) {
      const token = tokens[idx]

      if (token.type !== 'heading_open') {
        continue
      }

      if (!isLevelSelected(Number(token.tag.substr(1)))) {
        continue
      }

      // Aggregate the next token children text.
      const title = opts.getTokensText(tokens[idx + 1].children)

      let slug = token.attrGet('id')

      if (slug == null) {
        slug = uniqueSlug(opts.slugify(title), slugs, false, opts.uniqueSlugStartIndex)
      } else {
        slug = uniqueSlug(slug, slugs, true, opts.uniqueSlugStartIndex)
      }

      token.attrSet('id', slug)

      if (opts.tabIndex !== false) {
        token.attrSet('tabindex', `${opts.tabIndex}`)
      }

      if (typeof opts.permalink === 'function') {
        opts.permalink(slug, opts, state, idx)
      } else if (opts.permalink) {
        opts.renderPermalink(slug, opts, state, idx)
      } else if (opts.renderPermalink && opts.renderPermalink !== permalink.legacy) {
        opts.renderPermalink(slug, opts, state, idx)
      }

      // A permalink renderer could modify the `tokens` array so
      // make sure to get the up-to-date index on each iteration.
      idx = tokens.indexOf(token)

      if (opts.callback) {
        opts.callback(token, { slug, title })
      }
    }
  })
}

anchor.permalink = permalink

anchor.defaults = {
  level: 1,
  slugify,
  uniqueSlugStartIndex: 1,
  tabIndex: '-1',
  getTokensText,

  // Legacy options.
  permalink: false,
  renderPermalink: permalink.legacy,
  permalinkClass: permalink.ariaHidden.defaults.class,
  permalinkSpace: (permalink.ariaHidden.defaults as any).space,
  permalinkSymbol: '¶',
  permalinkBefore: (permalink.ariaHidden.defaults as any).placement === 'before',
  permalinkHref: permalink.ariaHidden.defaults.renderHref,
  permalinkAttrs: permalink.ariaHidden.defaults.renderAttrs
}

// Dirty hack to make `import anchor from 'markdown-it-anchor'` work with
// TypeScript which doesn't support the `module` field of `package.json` and
// will always get the CommonJS version which otherwise wouldn't have a
// `default` key, resulting in markdown-it-anchor being undefined when being
// imported that way.
anchor.default = anchor

export default anchor