### Tooltip component example:

```jsx
class TooltipExample extends React.Component {
  constructor() {
    super()
    this.state = {
      tooltipOpenRight: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }
  toggleOpen() {
    this.setState((prevState, props) => ({
      tooltipOpenRight: !prevState.tooltipOpenRight
    }))
  }
  render() {
    return(
      <>
        <Tooltip
          isOpen={this.state.tooltipOpenRight}
          close={this.toggleOpen}
          align="Right"
          text={
            <div>
            <h2>Example tooltip!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel justo elementum, dictum nulla a, ullamcorper ligula. Nullam in enim eleifend, dapibus nisi pellentesque, sollicitudin ex. Maecenas semper mi erat, ut viverra nisi aliquam ac. Vivamus rhoncus aliquam turpis, at placerat arcu dignissim ut. Duis quis diam ac libero mattis molestie a ac purus. In ut convallis ipsum, sed maximus diam. Nulla tempor nec magna sit amet vehicula.</p>
            </div>
            }
        >
          <button onClick={this.toggleOpen}>
            text
          </button>
        </Tooltip>

      </>
    )
  }
}

;<TooltipExample />
```
