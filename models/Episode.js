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
  state: { type: Types.Select, options: 'draft, published', default: 'draft', index: true, note: 'Only published episodes will appear on the live site.' },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  image: { type: Types.CloudinaryImage },
  content: {
    blurb: { type: String, height: 150, note: 'Basic description for the episode.' },
    credits: { type: String, height: 150, note: 'Extended show notes. Only shows up on the specific page of an episode.' },
    quote: { type: String, height: 150, note: 'Pull quote, which appears in the episode listings and in big letters at the top.' }
  }
});

Episode.register();
