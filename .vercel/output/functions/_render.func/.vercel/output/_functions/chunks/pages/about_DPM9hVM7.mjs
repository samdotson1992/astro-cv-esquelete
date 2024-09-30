/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experienced Python developer with a focus on data and backend processes. My background is in geospatial analysis with a masters in environmental science.</p>";

				const frontmatter = {"title":"about","name":"Sam Dotson","designation":"Data Scientist","location":"Chicago, IL 60601","pronouns":"he/him","website":"https://samdotson1992.github.io"};
				const file = "/Users/sam.dotson/Documents/GitHub/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nExperienced Python developer with a focus on data and backend processes. My background is in geospatial analysis with a masters in environmental science.\n";
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
