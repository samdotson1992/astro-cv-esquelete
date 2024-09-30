/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A blog focused on geospatial analysis and map making with Python</p>";

				const frontmatter = {"title":"Making maps with Geopandas","date":2024,"url":"https://samdotson1992.replnotes.com/posts/Making-maps-with-Geopandas","url_name":"Making maps with Geopandas"};
				const file = "/Users/sam.dotson/Documents/GitHub/astro-cv-esquelete/src/pages/blogs/making-maps-with-geopandas.md";
				const url = "/blogs/making-maps-with-geopandas";
				function rawContent() {
					return "\nA blog focused on geospatial analysis and map making with Python\n\n\n\n";
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
