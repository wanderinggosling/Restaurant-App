import React from 'react'
import './content.css'

const content = () => {
    return (
        <div className="content">
            <div className="menu">
                <h2 className="menu-group-heading">Chinese</h2>
                <div className="menu-group">
                    <div className="menu-item">
                        <img className="menu-item-image" src={require("../images/noodles.jpg")} alt="" />
                        <div className="menu-item-text">
                            <h3 className="menu-item-heading">
                                <span className="menu-item-name">Noodles</span>
                                <span className="menu-item-cost">$12</span>
                            </h3>
                            <div className="menu-item-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum unde ipsam, tempore vel accusantium enim iure! Vero quo corporis esse odit ipsa voluptatem quis aliquam totam, dicta illo voluptate.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt sint repellat voluptatum cumque accusamus consectetur ipsa in quod tempora ullam reiciendis laudantium veritatis officiis corrupti saepe? Dolores, nam corrupti!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa omnis reiciendis maiores quo dicta quis alias sit. Quia saepe deleniti quas, minus ullam temporibus optio modi fuga, ipsum ut doloremque?
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="menu-item">
                        <img className="menu-item-image" src={require("../images/vnoodles.jpg")} alt="" />
                        <div className="menu-item-text">
                            <h3 className="menu-item-heading">
                                <span className="menu-item-name">Noodles</span>
                                <span className="menu-item-cost">$12</span>
                            </h3>
                            <div className="menu-item-description">
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="menu-item">
                        <img className="menu-item-image" src={require("../images/vnoodles.jpg")} alt="" />
                        <div className="menu-item-text">
                            <h3 className="menu-item-heading">
                                <span className="menu-item-name">Noodles</span>
                                <span className="menu-item-cost">$12</span>
                            </h3>
                            <div className="menu-item-description">
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <h2 className="menu-group-heading">Soup</h2>
                <div className="menu-group">
                    <div className="menu-item">
                        <img className="menu-item-image" src={require("../images/soup.jpg")} alt="" />
                        <div className="menu-item-text">
                            <h3 className="menu-item-heading">
                                <span className="menu-item-name">Noodles</span>
                                <span className="menu-item-cost">$12</span>
                            </h3>
                            <div className="menu-item-description">
                                <p>
                                    Lorem ipsum dolor 
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="menu-item">
                        <img className="menu-item-image" src={require("../images/csoup.jpg")} alt="" />
                        <div className="menu-item-text">
                            <h3 className="menu-item-heading">
                                <span className="menu-item-name">Noodles</span>
                                <span className="menu-item-cost">$12</span>
                            </h3>
                            <div className="menu-item-description">
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default content
