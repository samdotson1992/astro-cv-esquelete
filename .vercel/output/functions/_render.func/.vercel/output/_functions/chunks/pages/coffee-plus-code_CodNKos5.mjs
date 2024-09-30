/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Random Python projects</p>";

				const frontmatter = {"title":"Coffee + Code","date":2019,"url":"https://samdotson1992.github.io/sam-drank-coffee/","url_name":"Coffee + Code"};
				const file = "/Users/sam.dotson/Documents/GitHub/astro-cv-esquelete/src/pages/blogs/coffee-plus-code.md";
				const url = "/blogs/coffee-plus-code";
				function rawContent() {
					return "\nRandom Python projects\n\n\n\n";
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
