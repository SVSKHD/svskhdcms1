const { sanitizeEntity } = require('strapi-utils');

module.exports = {
 

  async find(ctx) {
    let entities;
    const filters=ctx.query;

    filters.published=true;
    if (ctx.query._q) {
      entities = await strapi.services.reviews.search(filters);
    } else {
      entities = await strapi.services.reviews.find(filters);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.reviews }));
  },
};
