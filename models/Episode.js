var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Episode Model
 * =============
 */

var Episode = new keystone.List('Episode', {
  map: { name: 'title' }
});

Episode.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published', default: 'draft', index: true },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  image: { type: Types.CloudinaryImage },
  content: {
    blurb: { type: String, height: 150 },
    credits: { type: String, height: 150 },
    quote: { type: String, height: 150 }
  }
});

Episode.register();
