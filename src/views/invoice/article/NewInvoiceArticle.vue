<script lang="ts" setup>
import type { ArticleModel } from '@/models/article.model';
import type { InvoiceArticleModel } from '@/models/invoice.article.model';
import type { InvoiceModel } from '@/models/invoice.model';
import { ArticleService } from '@/services/article.service';
import { InvoiceService } from '@/services/invoice.service';
import { MainService } from '@/services/main.service';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const articles = ref<ArticleModel[]>()
const invoices = ref<InvoiceModel[]>()

const route = useRoute()
const router = useRouter()
const id = Number(route.query.invoice)

const invoiceArticle = ref({
    invoiceId: id ?? 0,
    articleId: 0,
    price: 0,
    discount: 0
})

async function loadData() {
    const articleRsp = await ArticleService.getArtiles()
    articles.value = articleRsp.data



    // TODO: Napraviti da prvo ucita INVOICE DETAILS PO OVOM ID pa onda idi na vozila
    // DRUGACIJE NE MOZE
    const invoiceRsp = await InvoiceService.getInvoicesForVehicleId(id)
    invoices.value = invoiceRsp.data
}

function doUpdate() {
    MainService.useAxios(`/invoice/article/${id}`, 'put', invoiceArticle.value)
        .then(rsp => router.push(`/invoice/${invoiceArticle.value?.invoiceId}/article`))
}

onMounted(()=>loadData())
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                Invoice Article
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                Edit
            </li>
        </ol>
    </nav>
    <h3>Edit Invoice Article</h3>
    <form v-if="invoiceArticle" v-on:submit.prevent="doUpdate()">
        <div class="mb-3">
            <label for="id" class="form-label">ID:</label>
            <input type="number" class="form-control" id="id" v-model="invoiceArticle.invoiceArticleId" disabled>
        </div>
        <div class="mb-3" v-if="invoices">
            <label for="invoice" class="form-label">Invoice:</label>
            <select class="form-select" v-model="invoiceArticle.invoiceId" id="invoice">
                <option v-for="i of invoices" :value="i.invoiceId">
                    [ID: {{ i.invoiceId }}] Updated: {{ MainService.updatedAt(i) }}
                </option>
            </select>
        </div>
        <div class="mb-3" v-if="articles">
            <label for="article" class="form-label">Article:</label>
            <select class="form-select" v-model="invoiceArticle.articleId" id="article">
                <option v-for="a of articles" :value="a.articleId">
                    {{ a.name }} ({{ a.price }} EUR)
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="time" class="form-label">Price</label>
            <input type="number" class="form-control" id="time" v-model="invoiceArticle.price">
        </div>
        <div class="mb-3">
            <label for="time" class="form-label">Discount:</label>
            <input type="number" class="form-control" id="time"  v-model="invoiceArticle.discount">
        </div>
        <div class="mb-3">
            <label for="time" class="form-label">Updated At:</label>
            <input type="text" class="form-control" id="time" :value="MainService.updatedAt(invoiceArticle)" disabled>
        </div>
        <button class="btn btn-primary tbn-success">
            <i class="fa-solid fa-floppy-disk"></i> Save Now
        </button>
    </form>
</template>