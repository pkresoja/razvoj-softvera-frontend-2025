<script lang="ts" setup>
import Search from '@/components/Search.vue';
import { ArticleService } from '@/services/article.service';
import { onMounted, ref } from 'vue';

const articles = ref()
const search = ref('')

function loadData() {
    ArticleService.getArtiles(search.value)
        .then(rsp => articles.value = rsp.data)
}

function doDelete(article: any) {
    ArticleService.deleteArticle(article.articleId)
        .then(rsp => {
            articles.value = articles.value.filter((a: any) => a.articleId !== article.articleId)
        })
}

onMounted(() => loadData())
</script>

<template>
    <h3>Articles</h3>
    <Search v-model="search" @change="loadData">
        <div class="btn-group">
            <RouterLink class="btn btn-primary" to="/article/new">
                <i class="fa-solid fa-plus"></i> Add Article
            </RouterLink>
        </div>
    </Search>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Part Number</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody v-if="articles">
            <tr v-for="article of articles">
                <th scope="row">{{ article.articleId }}</th>
                <td>{{ article.name }}</td>
                <td>{{ article.partNumber ? article.partNumber : 'N/A' }}</td>
                <td>{{ article.price }} RSD</td>
                <td>
                    <div class="btn-group">
                        <RouterLink class="btn btn-sm btn-success" :to="`/article/${article.articleId}`">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </RouterLink>
                        <button class="btn btn-sm btn-danger" type="button" @click="doDelete(article)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>