<template>
    <div class="relative font-jost">
        <div class="p-[7px]">
            <picture>
                <source media="(min-width: 768px)" srcset="/uploads/backgrounds/error.jpg" />
                <img
                    src="/uploads/backgrounds/error.jpg"
                    loading="lazy"
                />
            </picture>
        </div>
    </div>
    <div class="component-border-top relative font-jost">
        <div class="text-[20px] font-jost relative">
            <p class="m-[30px] leading-[35px]"><b>{{ code }} ~ </b>{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    code: {
        type: Number,
        required: true,
        default: 500,
    },
    message: {
        type: String,
        required: true,
        default: 'Internal Server Error',
    },
})
</script>
