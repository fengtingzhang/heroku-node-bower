var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading listing-prod">
                    <i className="fa fa-cube"></i><span className="listing-realm">{ this.props.name }</span>
                    <span className="listing-category label label-default">{ this.props.category }</span>                    
                </h4>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default">PROD: { this.props.prod }</button>
                    <button type="button" class="btn btn-default">QA: { this.props.qa }</button>
                    <button type="button" class="btn btn-default">INT: { this.props.int }</button>
                    <button type="button" class="btn btn-default">DEV: { this.props.dev }</button>                    
                </div>
            </a>
        );
    }
});
