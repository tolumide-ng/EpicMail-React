import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ResetRequestSchema from './schema';
import { requestResetAction } from '../../store/actions/requestReset';
import { RequestResetFormComponent } from '../../components/RequestReset';

const RequestResetForm = ({ requestReset, history }) => (
  <div className="flex mt-20 mx-auto flex-col p-10 w-100 rounded justify-center">
    <RequestResetFormComponent
      requestReset={requestReset}
      history={history}
      ResetRequestSchema={ResetRequestSchema}
    />
    <Link
      to="/login"
      className="mb-4 w-auto self-center button hover:text-yellow-200 text-white text-sm"
    >
      Login{' '}
    </Link>
  </div>
);

const mapStateToProps = state => ({
  requestResetStatus: state.requestResetReducer.requestResetStatus,
  user: state.requestResetReducer.user,
  error: state.requestResetReducer.error
});

const mapDispatchToProps = dispatch => ({
  requestReset: userData => dispatch(requestResetAction(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestResetForm);
