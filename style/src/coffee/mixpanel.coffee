$ ->
	# Pageviews
	mixpanel.track 'Page viewed'
	# Project views
	mixpanel.track_links '#projects-citylife-img', 'Project viewed',
		{
			'Project': 'citylife.be',
			'Link type used': 'image'
		}
	mixpanel.track_links '#projects-citylife-text', 'Project viewed',
		{
			'Project': 'citylife.be',
			'Link type used': 'text'
		}
	mixpanel.track_links '#projects-shoppeninleuven-img', 'Project viewed',
		{
			'Project': 'shoppeninleuven.be',
			'Link type used': 'image'
		}
	mixpanel.track_links '#projects-shoppeninleuven-text', 'Project viewed',
		{
			'Project': 'shoppeninleuven.be',
			'Link type used': 'text'
		}
	mixpanel.track_links '#projects-horecaleuven-img', 'Project viewed',
		{
			'Project': 'horecaleuven.be',
			'Link type used': 'image'
		}
	mixpanel.track_links '#projects-horecaleuven-text', 'Project viewed',
		{
			'Project': 'horecaleuven.be',
			'Link type used': 'text'
		}
	# Social network visits
	mixpanel.track_links '#social-network-linkedin', 'Social network visited',
		{
			'Network': 'LinkedIn'
		}
	mixpanel.track_links '#social-network-twitter', 'Social network visited',
		{
			'Network': 'Twitter'
		}
	mixpanel.track_links '#social-network-github', 'Social network visited',
		{
			'Network': 'GitHub'
		}
	mixpanel.track_links '#social-network-coderwall', 'Social network visited',
		{
			'Network': 'coderwall'
		}
	# Code views
		# Todo: 3 ways
		# - github link 		v
		# - inspect element
		# - view source
	mixpanel.track_links '#code-viewed-github', 'Code viewed',
		{
			'Method': 'GitHub link'
		}
	# Salto Frontale video played
	video_salto_frontale = videojs('salto-frontale')
	video_salto_frontale.on 'play', ->
		mixpanel.track 'Video Salto Frontale played'
	# Secondary link visits
	mixpanel.track_links '#secondary-link-jackass-kenny-rogers', 'Secondary link visited',
		{
			'Link': 'Jackass Kenny Rogers'
		}
	mixpanel.track_links '#secondary-link-google-maps-aalst', 'Secondary link visited',
		{
			'Link': 'Google Maps Aalst'
		}
	mixpanel.track_links '#secondary-link-google-maps-hasselt', 'Secondary link visited',
		{
			'Link': 'Google Maps Aalst'
		}
	mixpanel.track_links '#secondary-link-citylife-twitter', 'Secondary link visited',
		{
			'Link': 'CityLife Twiter'
		}
	mixpanel.track_links '#secondary-link-vikingco', 'Secondary link visited',
		{
			'Link': 'VikingCo'
		}
	mixpanel.track_links '#secondary-link-smile', 'Secondary link visited',
		{
			'Link': 'Smile'
		}
	mixpanel.track_links '#secondary-link-smile-kristof-twitter', 'Secondary link visited',
		{
			'Link': 'Smile Kristof Twitter'
		}
	mixpanel.track_links '#secondary-link-smile-bert-twitter', 'Secondary link visited',
		{
			'Link': 'Smile Bert Twitter'
		}
	mixpanel.track_links '#secondary-link-sveinn', 'Secondary link visited',
		{
			'Link': 'sveinn.be'
		}





	return