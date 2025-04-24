import type { ArticleModel } from "./article.model"

export interface InvoiceArticleModel {
    invoiceArticleId: number
    article: ArticleModel
    price: number
    discount: number
    invoiceId: number
    articleId: number
    createdAt: string
    updatedAt: string
}