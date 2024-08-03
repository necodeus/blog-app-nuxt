#!/bin/bash

# Script name: start.sh

echo "Starting the server..."

for i in "$@"
do
case $i in
    --prod)
    PROD=true
    shift
    ;;
    --local)
    LOCAL=true
    shift
    ;;
    *)
    ;;
esac
done

if [ "$PROD" = true ]; then
    export NUXT_PUBLIC_BLOG_API_URL=https://blog-api.necodeo.com/api/
    export NUXT_PUBLIC_IMAGES_URL=https://images.necodeo.com
    export NUXT_PUBLIC_WEBSOCKET_SESSION_HOST=necodeo.com
    export NUXT_PUBLIC_WEBSOCKET_ADDRESS=wss://www.necodeo.com:8090
    echo "MODE: production"
elif [ "$LOCAL" = true ]; then
    export NUXT_PUBLIC_BLOG_API_URL=https://blog-api.localhost/api/
    export NUXT_PUBLIC_IMAGES_URL=https://images.localhost/api/v1
    export NUXT_PUBLIC_WEBSOCKET_SESSION_HOST=localhost
    export NUXT_PUBLIC_WEBSOCKET_ADDRESS=ws://localhost:8090
    echo "MODE: local"
else
    echo "Please specify either --prod or --local"
    exit 1
fi

node .output/server/index.mjs
