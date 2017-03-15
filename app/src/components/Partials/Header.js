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
								<div className="tool-wrap-icon">
									<a class="uk-icon" uk-icon="icon: commenting; ratio: 1.2" href="#modal-container" uk-toggle></a>		
									<div id="modal-container" class="uk-modal-container" uk-modal>
											<div class="uk-modal-dialog uk-modal-body">
													<button class="uk-modal-close-default" type="button" uk-close></button>
													<h2 class="uk-modal-title">Headline</h2>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											</div>
									</div>
								</div>
								<div className="tool-wrap-icon">
									<a href="javascript:void(0)" class="uk-icon" uk-icon="icon: thumbnails; ratio: 1.45"></a>
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
