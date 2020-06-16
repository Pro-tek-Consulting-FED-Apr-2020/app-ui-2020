class SignInModal extends React.Component {
  constructor(props) {
    console.log("Props - ", props);
    super(props);
    this.state = {
      modalVisible: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    console.log("Open modal called ", this.state.modalVisible);
    const modalVisible = !this.state.modalVisible;
    this.setState({
      modalVisible
    });
  }
  render() {
    let styles = this.state.modalVisible
      ? { display: "block" }
      : { display: "none" };
    return (
      <div className="App">
        <button type="button" onClick={this.openModal} className="btn1">
          <i class="fa fa-user-circle" /> <span>Sign in</span>
        </button>
        <div
          id="myModal"
          className="modal fade in"
          role="dialog"
          style={styles}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span> Sign in</span>
                <button
                  type="button"
                  onClick={this.openModal}
                  className="close"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div class="signup-form">
                  <form class="form-styles">
                    <div class="row">
                      <div class="col-md-12">
                        <button class="btn2 default btn-block btn-outline">
                          <img
                            class="resize"
                            src="./images/Google.png"
                            alt="G"
                          />{" "}
                          Sign in with Google
                        </button>
                        <button class="btn btn3 default1 btn-block btn-outline">
                        <img
                          class="resize2"
                          src="./images/Facebook.png"
                          alt="f"
                        />{" "}
                        Sign in with Facebook
                      </button>
                      <button class="btn btn4 default1 btn-block btn-outline">
                        <img
                          class="resize3"
                          src="./images/Apple.png"
                          alt="A"
                        />{" "}
                        Sign in with Apple
                      </button>
                      </div>
                    </div>
                    <div class="or-seperator">
                      <p1>or sign in with email</p1>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email Address:"
                        required="required"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required="required"
                      />
                      <a href="#">
                      Forgot Your Password?
                      </a>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-success btn-block z-depth-1"
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="clearfix">
                      <label class="pull-left checkbox-inline">
                        <input type="checkbox" /> Remember my email address
                      </label>
                    </div>{" "}
                    <br />
                    <div class="form-group">
                      <p class="text-center">
                        Don't have an account?<a href="#">Create an Account</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

