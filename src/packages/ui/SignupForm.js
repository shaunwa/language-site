import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import colors from './colors';

const Form = styled.div`
  width: 100%;
  text-align: center;
`;

export function SignupForm({ title, description, buttonText, ckDataUuid, ckDataSvForm }) {
  return h(Form, { dangerouslySetInnerHTML: { __html: convertkitHtml({ title, description, buttonText, ckDataUuid, ckDataSvForm }) }});
}

const convertkitHtml = ({ title, description, buttonText, ckDataUuid, ckDataSvForm }) => `
<script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
<form action="https://app.convertkit.com/forms/${ckDataSvForm}/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="${ckDataSvForm}" data-uid="${ckDataUuid}" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;}}}" min-width="800" style="background-color: ${colors.popBackground}; border-radius: 16px;   box-shadow: 2px 2px 5px ${colors.boxShadow};"><div data-style="minimal"><h1 class="formkit-header" data-element="header" style="color: rgb(77, 77, 77); font-size: 27px; font-weight: 700;">${title}</h1><div data-element="subheader" class="formkit-subheader" style="color: rgb(104, 104, 104); font-size: 18px;"><p>${description}</p></div><ul data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="true" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" aria-label="Nombre" name="fields[first_name]" required="" placeholder="Nombre" type="text" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;"></div><div class="formkit-field"><input class="formkit-input" name="email_address" placeholder="Dirección de correo electrónico" required="" type="email" style="border-color: rgb(227, 227, 227); border-radius: 4px; color: rgb(0, 0, 0); font-weight: 400;"></div><button data-element="submit" class="formkit-submit" style="background-color: rgb(47, 112, 176); border-radius: 4px; color: rgb(255, 255, 255); font-weight: 700;"><span>${buttonText}</span></button></div><div data-element="guarantee" class="formkit-guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"><p>Puedes darte de baja cuando quieras, aunque realmente dudo que eso pasará 😉</p></div></div><style>.formkit-form[data-uid="${ckDataUuid}"] *{font-family:"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;box-sizing:border-box;}.formkit-form[data-uid="${ckDataUuid}"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="${ckDataUuid}"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="${ckDataUuid}"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="${ckDataUuid}"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="${ckDataUuid}"][data-format="modal"]{display:none;}.formkit-form[data-uid="${ckDataUuid}"] .formkit-input,.formkit-form[data-uid="${ckDataUuid}"] .formkit-select,.formkit-form[data-uid="${ckDataUuid}"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;vertical-align:middle;}.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit:hover,.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit:hover > span,.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="${ckDataUuid}"] .formkit-submit > span{display:block;-webkit-transition:background-color 300ms ease-in-out;transition:background-color 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="${ckDataUuid}"] input{font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin-right:15px;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="${ckDataUuid}"] input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="${ckDataUuid}"] input::-webkit-input-placeholder{color:#848585;}.formkit-form[data-uid="${ckDataUuid}"] input::-moz-placeholder{color:#848585;}.formkit-form[data-uid="${ckDataUuid}"] input:-ms-input-placeholder{color:#848585;}.formkit-form[data-uid="${ckDataUuid}"] input::placeholder{color:#848585;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#333333 transparent transparent transparent;border-style:solid;border-width:6px 5px 0 5px;height:0;width:0;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"]{text-align:left;margin-bottom:20px;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="alert"]{padding:12px;border:1px solid #e3e3e3;background:#f9fafb;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;border-radius:5px;margin:25px auto;text-align:center;width:80%;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="alert"]:empty{display:none;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="alert"][data-element="success"]{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="${ckDataUuid}"] [data-group="alert"][data-element="errors"]{background:#fde8e2;border-color:#f2643b;color:#ea4110;} .formkit-form[data-uid="${ckDataUuid}"]{text-align:center;color:#686868;border:1px solid #e3e3e3;border-radius:8px;box-sizing:border-box;background-size:cover;background-repeat:no-repeat;background-position:center;max-width:800px;}.formkit-form[data-uid="${ckDataUuid}"] [data-style="minimal"]{padding:25px;width:100%;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="header"]{margin-top:0;margin-bottom:27px;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="subheader"]{margin:18px 0;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="guarantee"]{font-size:13px;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="fields"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:25px auto 0 auto;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="fields"] > *{margin:0 0 15px 0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="fields"][data-stacked="true"] > *{margin:0 0 15px 0;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="fields"][data-stacked="true"] > *:last-child{margin:0;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="powered-by"]{color:#7d7d7d;display:block;font-size:12px;margin-bottom:0;margin-top:25px;}.formkit-form[data-uid="${ckDataUuid}"] [data-element="powered-by"][data-active="false"]{opacity:0.5;}.formkit-form[data-uid="${ckDataUuid}"][min-width~="500"] [data-style="minimal"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="600"] [data-style="minimal"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="700"] [data-style="minimal"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="800"] [data-style="minimal"]{padding:40px;}.formkit-form[data-uid="${ckDataUuid}"][min-width~="500"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] > *,.formkit-form[data-uid="${ckDataUuid}"][min-width~="600"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] > *,.formkit-form[data-uid="${ckDataUuid}"][min-width~="700"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] > *,.formkit-form[data-uid="${ckDataUuid}"][min-width~="800"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] > *{margin:0 15px 15px 0;-webkit-box-flex:none;-webkit-flex-grow:none;-ms-flex-positive:none;flex-grow:none;-webkit-flex-shrink:none;-ms-flex-negative:none;flex-shrink:none;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;}.formkit-form[data-uid="${ckDataUuid}"][min-width~="500"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] [data-element="submit"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="600"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] [data-element="submit"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="700"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] [data-element="submit"],.formkit-form[data-uid="${ckDataUuid}"][min-width~="800"] [data-style="minimal"] [data-element="fields"][data-stacked="false"] [data-element="submit"]{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;margin-right:0;} </style></form>
`;
