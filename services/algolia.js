import algoliasearch from "algoliasearch";

const admin = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API)

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_CLIENT_API)

const getIndex = function (indexName,adminParam = false) {
    if (adminParam) {
        return admin.initIndex(indexName)
    }

    return client.initIndex(indexName)
}

export default {
    getIndex
}