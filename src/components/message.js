export default class Message {
    constructor(appState) {
      this.currentScene = appState.currentScene
    }
  
    renderMessage() {
  
    }
  
    render () {
      this.renderMessage();
      return (
        <div>
          <H1> hello World</H1>
        </div>
      )
    }
  }