'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import guid from '../../helpers/guid';
/**
 * Declaration
 */
const Form = React.createClass({
  propTypes: {
    fields: PropTypes.array,
    submit: PropTypes.string,
    reset: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    noValidate: PropTypes.bool
  },

  getInitialState() {
    return {
      fields: this.props.fields.map(f => {
        if (!f.id) {
          f.id = 'field' + guid();
        }
        if (!f.value) {
          f.value = "";
        }
        return f;
      })
    };
  },
  updateState() {
    this.setState({
      fields: this.state.fields.map(f => {
        const target = this.refs[f.id];
        if (f.type === 'checkbox' || f.type === 'radio') {
          f.checked = target.checked;
        } else {
          f.value = target.value;
        }
        return f;
      })
    });
  },
  resetForm() {
    this.setState({
      fields: this.props.fields.map(f => {
        this.refs[f.id].value = f.value;
        f.value = "";
        return f;
      })
    })
  },
  onChange(event) {
    // save state
    this.setState({
      fields: this.state.fields.map(f => {
        if (event.target === this.refs[f.id]) {
          if (f.type === 'checkbox' || f.type === 'radio') {
            f.checked = event.target.checked;
          } else {
            f.value = event.target.value;
          }
        }
        return f;
      })
    });

    if (typeof this.props.onChange === 'function') {
      const fieldmap = this.generateFieldMap();
      this.props.onChange(event, fieldmap);
    }
  },

  generateFieldMap() {
    const fieldmap = {};
    this.state.fields.forEach(field => {
      if (field.type === 'radio' && field.checked) {
        fieldmap[field.name] = field.value;
      } else if (field.type === 'checkbox' && field.checked) {
        if (!fieldmap[field.name]) {
          fieldmap[field.name] = [];
        }
        fieldmap[field.name].push(field.value);
      } else {
        fieldmap[field.name] = field.value;
      }
    });
    return fieldmap;
  },

  onSubmit(event) {
    event.preventDefault();
    this.updateState();
    if (typeof this.props.onSubmit === 'function') {
      const fieldmap = this.generateFieldMap();
      this.props.onSubmit(event, fieldmap);
    }
  },
  renderFields() {
    if (this.state.fields && this.state.fields.length) {
      return this.state.fields.map(field => {
        if (field.type === 'select') {
          let options;
          if (field.optgroups) {
            options = field.optgroups.map(optgroup => {
              return optgroup.options ? (
                <optgroup label={optgroup.label}>
                  {optgroup.options.map(option => (
                    <option value={option.value}>{option.text}</option>
                  ))}
                </optgroup>
              ) : null;
            });
          } else {
            options = field.options.map(option => (
              <option value={option.value}>{option.text}</option>
            ))
          }

          return (
            <div className={'Form-field Form-field--' + field.type} key={field.id}>
              {field.label ?
                <label htmlFor={field.id} className={'Form-label' + (field.options && field.label === field.options[0].text ? ' Form-label--redundant': '')}>{field.label}</label>
              : null}
              <select ref={field.id} id={field.id} className="Form-input" name={field.name} value={field.value} onChange={this.onChange}>
                {options}
              </select>
            </div>
          );
        } else if (field.type === 'textarea') {
          return (
            <div className={'Form-field Form-field--' + field.type} key={field.id}>
              {field.label ?
                <label htmlFor={field.id} className={'Form-label' + (field.label === field.placeholder ? ' Form-label--redundant': '')}>{field.label}</label>
              : null}
              <textarea ref={field.id} id={field.id} className="Form-input" name={field.name} placeholder={field.placeholder} onChange={this.onChange}>{field.value}</textarea>
            </div>
          );
        } else if (field.type === 'checkbox' || field.type === 'radio' ) {
          return (
            <div className={'Form-field Form-field--' + field.type} key={field.id}>
              <input ref={field.id} id={field.id} className="Form-input" type={field.type} name={field.name} onChange={this.onChange} value={field.value} checked={field.checked} />
              <label htmlFor={field.id} className="Form-label">{field.label}</label>
            </div>
          );
        } else {
          return (
            <div className={'Form-field Form-field--text Form-field--' + field.type} key={field.id}>
              {field.label ?
                <label htmlFor={field.id} className={'Form-label' + (field.label === field.placeholder ? ' Form-label--redundant': '')}>{field.label}</label>
              : null}
              <input ref={field.id} id={field.id} className="Form-input" type={field.type} name={field.name} value={field.value} placeholder={field.placeholder} required={field.required} pattern={this.pattern} onChange={this.onChange} />
            </div>
          );
        }
      });
    }
  },
  render () {
    var submit = this.props.submit ? (<button type="submit" className="Form-submit Button"><span className="Button-hover" data-hover={this.props.submit}>{this.props.submit}</span></button>): null;
    var reset = this.props.reset ? (<button type="reset" className="Form-reset Button" onClick={this.resetForm}><span className="Button-hover" data-hover={this.props.reset}>{this.props.reset}</span></button>) : null;
    return (
      <form className="Form" onSubmit={this.onSubmit} noValidate={this.props.noValidate}>
        {this.props.children}
        {this.renderFields()}
        {submit}
        {reset}
      </form>
    );
  }
});
export default Form;
