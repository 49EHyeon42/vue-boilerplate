<script setup lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue';
import CommentForm from '@/testComponents/comment/commentForm.vue';
import CommentItem from '@/testComponents/comment/CommentItem.vue';
</script>

<template>
  <SidebarLayout>
    <h1>Sidebar Layout</h1>

    <CommentForm />
    <CommentItem />
    <CommentItem />
    <CommentItem />
  </SidebarLayout>
</template>

<style scoped></style>
