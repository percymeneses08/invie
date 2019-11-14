import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Heart from './Heart'

function mapStateToProps(state) {
  // Aquí le digo qué información quiero que retorne del state
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}


class Portada extends Component {
  renderHeart() {
    // Creo un array con 10 elementos vacíos
    const hearts = new Array(100).fill({})
    return (
      hearts.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 + "px",
          animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + "ms"
        }
        return (
          // Cada elemento iterable debe tener un key
          <Heart key={index} style={style} />
        )
      })
    )
  }
  render() {
    return (
      <section id="portada" className={`portada background ${this.props.isAnimated}`}>
        <header id="header" className="header contenedor">
          <CSSTransitionGroup
            transitionName="rotate" 
            transitionEnterTimeout={300} 
            transitionLeave={false}
          >
            {/* En toda transición en React tiene que cambiar el key */}
            <figure className="logotipo" key={this.props.logo}>
              <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
            </figure>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <nav className="menu" key={this.props.menu}>
              <ul>
                {this.props.menu.map((item) => {
                  return (
                    <li>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </CSSTransitionGroup>
        </header>
        <CSSTransitionGroup
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          { 
            // Le pongo el símbolo de exclamación para que desaparezca todo el contenedor
            !this.props.isAnimated &&
              <div className="contenedor" key ="portada">
                <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                <a className="button" href="#guitarras">Conoce mas</a>
              </div>
          }
        </CSSTransitionGroup>
        {
          this.props.isAnimated &&
          this.renderHeart()
        }
      </section>
    )
  }
}

export default connect(mapStateToProps) (Portada)