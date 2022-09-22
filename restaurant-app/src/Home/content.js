import React from 'react'
import './content.css'
import {RiDeleteBin2Line}from 'react-icons/ri'
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
