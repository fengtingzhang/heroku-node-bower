var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');
var Domains = require('./Domains.jsx');

React.render(
    <Domains />,
    document.getElementById('domains')
);
