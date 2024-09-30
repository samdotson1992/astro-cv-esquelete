/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>An older blog of mine focusing on Geospatial analysis with Python.</p>";

				const frontmatter = {"title":"SuperGIS","date":2017,"url":"https://samdotson1992.github.io/SuperGIS/","url_name":"SuperGIS"};
				const file = "/Users/sam.dotson/Documents/GitHub/astro-cv-esquelete/src/pages/blogs/supergis.md";
				const url = "/blogs/supergis";
				function rawContent() {
					return "\nAn older blog of mine focusing on Geospatial analysis with Python. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
