# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# The default title of our website
			title: "DMA"

			# The website's styles
			styles: [
				'/assets/css/bootstrap.min.css'
				'/assets/css/style.css'
				'/assets/css/style-responsive.css'
				'/assets/css/animate.css'
				'/assets/third/font-awesome/css/font-awesome.min.css'
				'/assets/third/weather-icon/css/weather-icons.min.css'
				'/assets/third/morris/morris.css'
				'/assets/third/nifty-modal/css/component.css'
				'/assets/third/sortable/sortable-theme-bootstrap.css'
				'/assets/third/icheck/skins/minimal/grey.css' 
				'/assets/third/select/bootstrap-select.min.css'
				'/assets/third/summernote/summernote.css'
				'/assets/third/magnific-popup/magnific-popup.css' 
				'/assets/third/datepicker/css/datepicker.css'
			]

			# The website's scripts
			scripts: [
				'/assets/js/jquery.js'
				'/assets/js/bootstrap.min.js'
				'/assets/third/slimscroll/jquery.slimscroll.min.js'
				'http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js'
				'/assets/third/morris/morris.js'
				'/assets/third/nifty-modal/js/classie.js'
				'/assets/third/nifty-modal/js/modalEffects.js'
				'/assets/third/sortable/sortable.min.js'
				'/assets/third/select/bootstrap-select.min.js'
				'/assets/third/summernote/summernote.js'
				'/assets/third/magnific-popup/jquery.magnific-popup.min.js' 
				'/assets/third/input/bootstrap.file-input.js'
				'/assets/third/datepicker/js/bootstrap-datepicker.js'
				'/assets/third/icheck/icheck.min.js'
				'/assets/third/wizard/jquery.snippet.min.js'
				'/assets/third/wizard/jquery.easyWizard.js'
				'/assets/third/wizard/scripts.js'
				'/assets/js/lanceng.js'
			]
		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} / #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title
	plugins:
		cleanurls:
			static: true
}

module.exports =
	# =================================
    # Template Data
    # These are variables that will be accessible via our templates

    templateData:

        # -----------------------------
        # Site Information

        site:

            # Site Production URL
            url: 'http://interpaul.github.io/dma'

        # -----------------------------
        # Helpers

        # Get the Absolute URL of a document
        getUrl: (document) ->
            return @site.url + (document.url or document.get?('url'))

    # =================================
    # Environments

    environments:
        development:
            templateData:
                site:
                    url: 'http://localhost:9778'

# Export the DocPad Configuration
module.exports = docpadConfig