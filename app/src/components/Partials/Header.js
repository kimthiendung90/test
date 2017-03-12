import React from 'react';
import Search from './Search';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="margin-bottom-1rem">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div id="header-wrap">
							<h1 id="logo" className="uk-heading-line">
								<a href="#">Line of me</a>
							</h1>
							<div id="tool-filter">
								<div className="tool-wrap-icon" >
									<a href="javascript:void(0)" class="uk-icon" uk-icon="icon: cog; ratio: 1.2"></a>
									<div uk-dropdown="mode: click; pos: bottom-right">
										<ul className="uk-nav uk-dropdown-nav">
											<li className="uk-active"><a href="#">Active</a></li>
											<li><a href="#">Item</a></li>
											<li className="uk-nav-header">Header</li>
											<li><a href="#">Item</a></li>
											<li><a href="#">Item</a></li>
											<li className="uk-nav-divider"></li>
											<li><a href="#">Item</a></li>
										</ul>
									</div>
								</div>
								<div className="tool-wrap-icon">
									<a href="javascript:void(0)" class="uk-icon" uk-icon="icon: menu; ratio: 1.5"></a>
									<div uk-dropdown="mode: click; pos: bottom-right">
										<ul className="uk-nav uk-dropdown-nav">
											<li className="uk-active"><a href="#">Active</a></li>
											<li><a href="#">Item</a></li>
											<li className="uk-nav-header">Header</li>
											<li><a href="#">Item</a></li>
											<li><a href="#">Item</a></li>
											<li className="uk-nav-divider"></li>
											<li><a href="#">Item</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-8">
						<div id="tool-search">
							<form className="uk-search uk-search-default">
								<span className="uk-search-icon-flip" uk-search-icon></span>
								<input className="uk-search-input" type="search" placeholder="Search..." />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Header;
