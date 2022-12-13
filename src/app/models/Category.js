import Sequelize, { Model } from 'sequelize'

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            // return `http://localhost:3010/category-file/${this.path}`
            return `https://e-commerce-burgershop-api.onrender.com/category-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default Category
