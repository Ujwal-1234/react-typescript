import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default function Loading({text='Loading', speed=300}) {
  const [content, setData] = useState(text)

  
  useEffect(()=>{
    const id = window.setInterval(()=>{
      setData(()=>{
        return content === `${text}...`? text :`${content}.`
      })
    }, speed)
    return ()=>window.clearInterval(id)
  }, [text, speed])
  
  return (
    <p style={styles.content}>
        {content}
      </p>
  )
}



// export default class Loading extends React.Component {
//   state = { content: this.props.text }
//   componentDidMount () {
//     const { speed, text } = this.props

//     this.interval = window.setInterval(() => {
//       this.state.content === text + '...'
//         ? this.setState({ content: text })
//         : this.setState(({ content }) => ({ content: content + '.' }))
//     }, speed)
//   }
//   componentWillUnmount () {
//     window.clearInterval(this.interval)
//   }
//   render() {
//     return (
//       <p style={styles.content}>
//         {this.state.content}
//       </p>
//     )
//   }
// }

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}