<template>
	<div class="c-archive component-padding font-jost">
		<SectionTitle><b>Archiwum</b> wpisów</SectionTitle>
		<ul>
			<li>
				<NuxtLink to="/archiwum/lipiec-2024">
					<div>
						<div class="month">lipiec 2024</div>
						<div class="separator"></div>
						<div class="num-of-posts">2 wpisy</div>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.c-archive ul > li:not(:last-child) {
	margin-bottom: 15px;
}

.c-archive ul > li > a > div {
	padding: 10px 0;
	display: flex;
	align-items: center;
}

.c-archive ul > li > a > div > .month {
	width: auto;
	font-size: 20px;
	white-space: nowrap;
}

.c-archive ul > li > a > div > .separator {
	margin: 0 10px;
	background-color: #e1e1e1;
	width: 50px;
	width: 100%;
	height: 1px;
}

.c-archive ul > li > a > div > .num-of-posts {
	font-size: 17px;
	white-space: nowrap;
}
</style>
