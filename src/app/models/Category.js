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
            return `http://localhost:3010/category-file/${this.path}`            
            // return `https://api.render.com/deploy/srv-cec9rd4gqg4ap4bdqrk0?key=7U9cW84XofI/category-file/${this.path}`
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
