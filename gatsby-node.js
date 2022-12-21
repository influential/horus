const path = require('path');

exports.createPages = async({ graphql, actions }) => {
    const { data } = await graphql(`
        query CreatePages {
            helpersJson {
                productData {
                    data {
                        title
                        shortTitle
                        price
                        overview
                        includes
                        specs {
                            weight
                            dimensions
                            magnification
                            bodyMaterial
                            eyeRelief
                            fov
                            finish
                            illumination
                            reticleColor
                            warranty
                            coating
                            installation
                            reduction
                            treatments
                            length
                            angle
                            mountType
                        }
                        images {
                            childrenImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    `)

    data.helpersJson.productData.forEach(product => {
        console.log(product)
        actions.createPage({
            path: '/products/' + product.data.shortTitle,
            component: path.resolve('./src/components/Product/index.js'),
            context: { product: product.data }
        })
    })
}

