var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 class="list-group-item-heading listing-prod">
                    <span className="listing-platform-name">{ this.props.platform }</span>
                </h4>
                <p className="list-group-item-text">
                    <span className="listing-realm">PROD: { this.props.prod }</span>
                    <small className="listing-category">Category: { this.props.name }</small>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-realm">QA: { this.props.qa }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-realm">INT: { this.props.int }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-realm">DEV: { this.props.dev }</span>
                </p>
            </a>
        );
    }
});
