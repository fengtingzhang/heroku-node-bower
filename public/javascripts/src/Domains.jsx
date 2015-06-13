var React = require('react');
var Domain = require('./Domain.jsx');
var Data = [
  {
    "prod": "no",
    "platform": "Platform",
    "name": "Documents",
    "category": "Core",
    "dev": "yes",
    "int": "yes",
    "qa": "no"
  },
  {
    "prod": "yes",
    "platform": "Platform",
    "name": "Search",
    "category": "Core",
    "dev": "yes",
    "int": "yes",
    "qa": "yes"
  },
  {
    "prod": "yes",
    "platform": "Platform",
    "name": "UIToolkit",
    "category": "Toolkit",
    "dev": "yes",
    "int": "yes",
    "qa": "yes"
  }
];

module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: Data
        };
    },
    render: function(){
        return (
            <div className="list-group">
                {this.state.data.map(function(domain){
                    return (
                        <Domain
                            prod={domain.prod}
                            platform={domain.platform}
                            name={domain.name}
                            category={domain.category}
                            dev={domain.dev}
                            int={domain.int}
                            qa={domain.qa}
                        />
                    )
                })}
            </div>
        )
    }
});
