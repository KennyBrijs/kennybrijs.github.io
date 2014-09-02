(function() {
  $(function() {
    mixpanel.track('Page viewed');
    mixpanel.track_links('#projects-citylife-img', 'Project viewed', {
      'Project': 'citylife.be',
      'Link type used': 'image'
    });
    mixpanel.track_links('#projects-citylife-text', 'Project viewed', {
      'Project': 'citylife.be',
      'Link type used': 'text'
    });
    mixpanel.track_links('#projects-shoppeninleuven-img', 'Project viewed', {
      'Project': 'shoppeninleuven.be',
      'Link type used': 'image'
    });
    mixpanel.track_links('#projects-shoppeninleuven-text', 'Project viewed', {
      'Project': 'shoppeninleuven.be',
      'Link type used': 'text'
    });
    mixpanel.track_links('#projects-horecaleuven-img', 'Project viewed', {
      'Project': 'horecaleuven.be',
      'Link type used': 'image'
    });
    mixpanel.track_links('#projects-horecaleuven-text', 'Project viewed', {
      'Project': 'horecaleuven.be',
      'Link type used': 'text'
    });
    mixpanel.track_links('#social-network-linkedin', 'Social network visited', {
      'Network': 'LinkedIn'
    });
    mixpanel.track_links('#social-network-twitter', 'Social network visited', {
      'Network': 'Twitter'
    });
    mixpanel.track_links('#social-network-github', 'Social network visited', {
      'Network': 'GitHub'
    });
    mixpanel.track_links('#social-network-coderwall', 'Social network visited', {
      'Network': 'coderwall'
    });
  });

}).call(this);
