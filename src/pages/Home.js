import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/home'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  componentDidMount() {
    this.props.getHomeInfo()
  }

  componentDidCatch(err, info) {
    this.setState({
      hasError: true,
    })
    //
    console.log('发送错误', err, info)
  }
  render() {
    let { add, count, homeInfo: { name, age } } = this.props
    return (
      <div>
        <h3>hello world</h3>
        <p className="center-align" >Look at these amazing features!!!</p>
        <p>my name is {name}</p>
        <p>my age is {age}</p>
        <p>计数器:{count}</p>
        <button style={{ backgroundColor: '#eee' }} onClick={() => add(count + 1)}>增加</button>
        <Link to='/user'>User</Link>
      </div>
    )
  }
}

Home.propTypes = {
  add: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  homeInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  getHomeInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  homeInfo: state.homeInfo,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)