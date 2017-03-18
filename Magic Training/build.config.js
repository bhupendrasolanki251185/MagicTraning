/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once it's
	 * completely built.
	 */
	build_dir: 'build',
	compile_dir: 'dist',

	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctpl` contains
	 * our reusable components' (`src/common`) template HTML files, while
	 * `atpl` contains the same, but for our app's code. `html` is just our
	 * main HTML file, `less` is our main stylesheet, and `unit` contains our
	 * app's unit tests.
	 */
	app_files: {
		js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
		jsunit: ['src/**/*.spec.js'],

		coffee: ['src/**/*.coffee', '!src/**/*.spec.coffee'],
		coffeeunit: ['src/**/*.spec.coffee'],

		atpl: ['src/app/**/*.tpl.html'],
		ctpl: ['src/common/**/*.tpl.html'],

		html: ['src/index.html'],
		less: 'src/less/main.less'
	},

	/**
	 * This is a collection of files used during testing only.
	 */
	test_files: {
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},

	/**
	 * This is the same as `app_files`, except it contains patterns that
	 * reference vendor code (`vendor/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `vendor_files.js`.
	 *
	 * The `vendor_files.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `vendor_files.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `vendor_files.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 */
	vendor_files: {
		js: [
			'vendor/pdfjs-dist/build/pdf.js',
			'vendor/pdfjs-dist/build/pdf.worker.js',
			'vendor/angular/angular.js',
			'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
			'vendor/angular-ui-router/release/angular-ui-router.js',
			'vendor/angular-ui-utils/modules/route/route.js',
			'vendor/angular-sanitize/angular-sanitize.js',
			'vendor/angular-fullscreen/src/angular-fullscreen.js',
			'vendor/jquery/dist/jquery.js',
			'vendor/jquery-ui/jquery-ui.min.js',
			'vendor/jquery-ui-touch-punch-improved/jquery.ui.touch-punch-improved.js',
			'vendor/custom-perfectscroll/custom-perfect-scrollbar.js',
			'vendor/html2canvas/dist/html2canvas.min.js',
			'vendor/rangy/rangy-core.min.js',
			'vendor/rangy/rangy-classapplier.min.js',
			'vendor/rangy/rangy-highlighter.min.js',
			'vendor/rangy/rangy-textrange.min.js',
			'vendor/fabric/dist/fabric.min.js',
			'vendor/annotator-Comp/annotator/annotator-full.min.js',
			'vendor/annotator-Comp/annotator/annotator.offline.min.js',
			'vendor/annotator-Comp/annotator/annotator.touch.min.js',
			'vendor/angular-aria/angular-aria.js'
			
		],
		css: [
			'vendor/jquery-ui/themes/smoothness/jquery-ui.min.css',
			'vendor/custom-perfectscroll/custom-perfect-scrollbar.css',
			'vendor/annotator-Comp/annotator/annotator.min.css',
			'vendor/annotator-Comp/annotator/annotator.touch.css'
		],
		assets: [
			'src/assets/images/ui-icons_222222_256x240.png'
		],
		fonts: [
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
			'vendor/font-awesome/fonts/fontawesome-webfont.eot',
			'vendor/font-awesome/fonts/fontawesome-webfont.svg',
			'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
			'vendor/font-awesome/fonts/fontawesome-webfont.woff',
			'vendor/font-awesome/fonts/fontawesome-webfont.woff2',
			'vendor/font-awesome/fonts/fontAwesome.otf'
		]
	},
	font_files: {
		fonts: [
			'src/assets/georgiafont/Georgia-SILO-Bold.eot',
			'src/assets/georgiafont/Georgia-SILO-Bold.svg',
			'src/assets/georgiafont/Georgia-SILO-Bold.ttf',
			'src/assets/georgiafont/Georgia-SILO-Bold.woff',
			'src/assets/georgiafont/Georgia-SILO-BoldItalic.eot',
			'src/assets/georgiafont/Georgia-SILO-BoldItalic.svg',
			'src/assets/georgiafont/Georgia-SILO-BoldItalic.ttf',
			'src/assets/georgiafont/Georgia-SILO-BoldItalic.woff',
			'src/assets/georgiafont/Georgia-SILO-Italic.eot',
			'src/assets/georgiafont/Georgia-SILO-Italic.svg',
			'src/assets/georgiafont/Georgia-SILO-Italic.ttf',
			'src/assets/georgiafont/Georgia-SILO-Italic.woff',
			'src/assets/georgiafont/GeorgiaSILO.eot',
			'src/assets/georgiafont/GeorgiaSILO.svg',
			'src/assets/georgiafont/GeorgiaSILO.ttf',
			'src/assets/georgiafont/GeorgiaSILO.woff',

			'src/assets/sansfont/TheSans-B2ExtraLight.eot',
			'src/assets/sansfont/TheSans-B2ExtraLight.svg',
			'src/assets/sansfont/TheSans-B2ExtraLight.ttf',
			'src/assets/sansfont/TheSans-B2ExtraLight.woff',
			'src/assets/sansfont/TheSans-B2ExtraLightItalic.eot',
			'src/assets/sansfont/TheSans-B2ExtraLightItalic.svg',
			'src/assets/sansfont/TheSans-B2ExtraLightItalic.ttf',
			'src/assets/sansfont/TheSans-B2ExtraLightItalic.woff',
			'src/assets/sansfont/TheSans-B3Light.eot',
			'src/assets/sansfont/TheSans-B3Light.svg',
			'src/assets/sansfont/TheSans-B3Light.ttf',
			'src/assets/sansfont/TheSans-B3Light.woff',
			'src/assets/sansfont/TheSans-B3LightItalic.eot',
			'src/assets/sansfont/TheSans-B3LightItalic.svg',
			'src/assets/sansfont/TheSans-B3LightItalic.ttf',
			'src/assets/sansfont/TheSans-B3LightItalic.woff',
			'src/assets/sansfont/TheSans-B4SemiLight.eot',
			'src/assets/sansfont/TheSans-B4SemiLight.svg',
			'src/assets/sansfont/TheSans-B4SemiLight.ttf',
			'src/assets/sansfont/TheSans-B4SemiLight.woff',
			'src/assets/sansfont/TheSans-B4SemiLightItalic.eot',
			'src/assets/sansfont/TheSans-B4SemiLightItalic.svg',
			'src/assets/sansfont/TheSans-B4SemiLightItalic.ttf',
			'src/assets/sansfont/TheSans-B4SemiLightItalic.woff',
			'src/assets/sansfont/TheSans-B5Plain.eot',
			'src/assets/sansfont/TheSans-B5Plain.svg',
			'src/assets/sansfont/TheSans-B5Plain.ttf',
			'src/assets/sansfont/TheSans-B5Plain.woff',
			'src/assets/sansfont/TheSans-B5PlainItalic.eot',
			'src/assets/sansfont/TheSans-B5PlainItalic.svg',
			'src/assets/sansfont/TheSans-B5PlainItalic.ttf',
			'src/assets/sansfont/TheSans-B5PlainItalic.woff',
			'src/assets/sansfont/TheSans-B6SemiBold.eot',
			'src/assets/sansfont/TheSans-B6SemiBold.svg',
			'src/assets/sansfont/TheSans-B6SemiBold.ttf',
			'src/assets/sansfont/TheSans-B6SemiBold.woff',
			'src/assets/sansfont/TheSans-B6SemiBoldItalic.eot',
			'src/assets/sansfont/TheSans-B6SemiBoldItalic.svg',
			'src/assets/sansfont/TheSans-B6SemiBoldItalic.ttf',
			'src/assets/sansfont/TheSans-B6SemiBoldItalic.woff',
			'src/assets/sansfont/TheSans-B7Bold.eot',
			'src/assets/sansfont/TheSans-B7Bold.svg',
			'src/assets/sansfont/TheSans-B7Bold.ttf',
			'src/assets/sansfont/TheSans-B7Bold.woff',
			'src/assets/sansfont/TheSans-B7BoldItalic.eot',
			'src/assets/sansfont/TheSans-B7BoldItalic.svg',
			'src/assets/sansfont/TheSans-B7BoldItalic.ttf',
			'src/assets/sansfont/TheSans-B7BoldItalic.woff',
			'src/assets/sansfont/TheSans-B8ExtraBold.eot',
			'src/assets/sansfont/TheSans-B8ExtraBold.svg',
			'src/assets/sansfont/TheSans-B8ExtraBold.ttf',
			'src/assets/sansfont/TheSans-B8ExtraBold.woff',
			'src/assets/sansfont/TheSans-B8ExtraBoldItalic.eot',
			'src/assets/sansfont/TheSans-B8ExtraBoldItalic.svg',
			'src/assets/sansfont/TheSans-B8ExtraBoldItalic.ttf',
			'src/assets/sansfont/TheSans-B8ExtraBoldItalic.woff',
			'src/assets/sansfont/TheSans-B9Black.eot',
			'src/assets/sansfont/TheSans-B9Black.svg',
			'src/assets/sansfont/TheSans-B9Black.ttf',
			'src/assets/sansfont/TheSans-B9Black.woff',
			'src/assets/sansfont/TheSans-B9BlackItalic.eot',
			'src/assets/sansfont/TheSans-B9BlackItalic.svg',
			'src/assets/sansfont/TheSans-B9BlackItalic.ttf',
			'src/assets/sansfont/TheSans-B9BlackItalic.woff',
			'src/assets/customized-fonts/customized-fonts.eot',
			'src/assets/customized-fonts/customized-fonts.svg',
			'src/assets/customized-fonts/customized-fonts.ttf',
			'src/assets/customized-fonts/customized-fonts.woff'
				

		]
	},
	ngconstant: {
		// Options for all targets
		options: {
			space: '  ',
			wrap: '"use strict";\n\n {%= __ngModule %}',
			name: 'config',
		},
		// Environment targets
		dev: {
			options: {
				dest: 'build/src/app/config.js'
			},
			constants: {
				ENV: {
					name: 'development',
					apiEndpoint: 'http://localhost:9001/'
				}
			}
		},
		// Environment targets
		qc: {
			options: {
				dest: 'build/src/app/config.js'
			},
			constants: {
				ENV: {
					name: 'qc',
					apiEndpoint: 'http://your-development.api.endpoint:3000'
				}
			}
		},
		prod: {
			options: {
				dest: 'build/src/app/config.js'
			},
			constants: {
				ENV: {
					name: 'production',
					apiEndpoint: 'http://api.livesite.com'
				}
			}
		}
	}
};
