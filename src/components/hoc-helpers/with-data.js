import React, { Component } from "react";
import ErrorIndicator from "../error-inicator";
import Spinner from "../spinner";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false,
    };
    componentDidMount() {
      this.setState({ loading: true, hasError: false });
      this.props
        .getData()
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch(() => {
          this.setState({ hasError: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
