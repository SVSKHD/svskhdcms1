const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.subscribers.create(data, { files });
    } else {
      entity = await strapi.services.subscribers.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.subscribers });
  },
};
