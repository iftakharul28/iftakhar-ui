'use strict';
var e = require('react');
require('react-dom');
var t = function () {
  return (
    (t =
      Object.assign ||
      function (e) {
        for (var t, n = 1, l = arguments.length; n < l; n++) for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }),
    t.apply(this, arguments)
  );
};
'function' == typeof SuppressedError && SuppressedError;
var n = function (n) {
    return 'link' === n.type ? e.createElement('a', { className: n.className, href: n.href }, n.children) : e.createElement('button', t({}, n), n.children);
  },
  l = function () {
    return e.createElement(
      'svg',
      { viewBox: '64 64 896 896', focusable: 'false', 'data-icon': 'close', width: '1em', height: '1em', fill: 'currentColor', 'aria-hidden': 'true' },
      e.createElement('path', {
        d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
      })
    );
  },
  a = e.createContext(void 0);
(exports.AccordionContent = function (t) {
  return (null == t ? void 0 : t.active) ? e.createElement('div', { className: null == t ? void 0 : t.className }, null == t ? void 0 : t.children) : null;
}),
  (exports.AccordionItem = function (t) {
    return e.createElement('div', { className: null == t ? void 0 : t.className, 'aria-label': null == t ? void 0 : t.value }, null == t ? void 0 : t.children);
  }),
  (exports.AccordionTrigger = function (t) {
    return e.createElement(n, { className: null == t ? void 0 : t.className, type: 'button', onClick: null == t ? void 0 : t.onClick }, null == t ? void 0 : t.children);
  }),
  (exports.Case = function (e) {
    return e.condition ? e.children : null;
  }),
  (exports.Content = function (t) {
    return e.createElement(
      'div',
      { className: null == t ? void 0 : t.className, style: { display: (null == t ? void 0 : t.value) === (null == t ? void 0 : t.activeTab) ? 'block' : 'none' } },
      null == t ? void 0 : t.children
    );
  }),
  (exports.Default = function (e) {
    return e.children;
  }),
  (exports.Error = function (t) {
    e.createElement(
      'div',
      { className: 'toast-container', style: { left: 0 } },
      e.createElement(
        'div',
        { className: 'toast-content' },
        e.createElement('div', { className: 'toast-title' }, t.msg),
        t.description ? e.createElement('div', { className: 'toast-description' }, t.description) : null,
        e.createElement(n, { className: 'toast-button', type: 'button' }, 'Undo')
      )
    );
  }),
  (exports.List = function (t) {
    return e.createElement('div', { className: null == t ? void 0 : t.className, 'aria-label': null == t ? void 0 : t.ariaLabel }, null == t ? void 0 : t.children);
  }),
  (exports.Modal = function (t) {
    var n = t.show,
      l = t.onClose,
      a = t.onConfirm,
      o = t.options,
      c = o.content,
      r = o.okText,
      i = void 0 === r ? 'OK' : r,
      s = o.cancelText,
      u = void 0 === s ? 'Cancel' : s,
      d = o.message;
    if (!n) return null;
    return e.createElement(
      'div',
      { className: 'modal-overlay' },
      e.createElement(
        'div',
        { className: 'modal' },
        e.createElement('div', { className: 'modal-content' }, c && e.createElement('p', null, c), d && e.createElement('p', null, d)),
        e.createElement(
          'div',
          { className: 'modal-actions' },
          c && e.createElement('button', { onClick: l }, u),
          e.createElement(
            'button',
            {
              onClick: function () {
                l(), null == a || a();
              },
            },
            i
          )
        )
      )
    );
  }),
  (exports.ModalComponents = function (t) {
    var a,
      o = t.title,
      c = t.onCancel,
      r = t.onOk,
      i = t.className,
      s = t.confirmLoading,
      u = t.okButton,
      d = t.children;
    return e.createElement(
      'div',
      { className: 'modal-wrapper' },
      e.createElement(
        'div',
        { className: 'modal-content '.concat(i || '') },
        e.createElement(n, { onClick: c, type: 'button', className: 'modal-close-icon' }, t.closeIcon ? t.closeIcon : e.createElement(l, null)),
        o ? e.createElement('div', { className: 'modal-header' }, o) : null,
        e.createElement('div', { className: 'modal-body' }, d),
        e.createElement(
          'div',
          { className: 'modal-actions' },
          e.createElement('button', { onClick: c }, t.cancelText),
          e.createElement('button', { className: 'text-secondary '.concat(null !== (a = null == u ? void 0 : u.className) && void 0 !== a ? a : ''), onClick: r, disabled: s }, t.okText)
        )
      ),
      e.createElement(n, { onClick: c, type: 'button', className: 'modal-mask' })
    );
  }),
  (exports.Success = function (t) {
    return e.createElement('div', null, t.msg);
  }),
  (exports.TooltipContent = function (t) {
    var n = t.children,
      l = t.sideOffset;
    return e.createElement('div', { className: 'TooltipContent', style: { marginLeft: l } }, n);
  }),
  (exports.TooltipPortal = function (t) {
    var n = t.children;
    return e.useContext(a).isVisible ? e.createElement('div', { className: 'TooltipPortal' }, n) : null;
  }),
  (exports.TooltipTrigger = function (t) {
    var n = t.asChild,
      l = t.children,
      o = t.className,
      c = e.useContext(a),
      r = c.showTooltip,
      i = c.hideTooltip;
    return e.createElement(
      'div',
      {
        className: o,
        onMouseEnter: function () {
          n && r();
        },
        onMouseLeave: function () {
          n && i();
        },
      },
      l
    );
  }),
  (exports.Trigger = function (t) {
    return e.createElement(
      n,
      {
        type: 'button',
        className:
          (null == t ? void 0 : t.value) === (null == t ? void 0 : t.activeTab) ? (null == t ? void 0 : t.className) + ' ' + (null == t ? void 0 : t.activeClass) : null == t ? void 0 : t.className,
        onClick: function () {
          return null == t ? void 0 : t.onClick(null == t ? void 0 : t.value);
        },
      },
      null == t ? void 0 : t.children
    );
  });
//# sourceMappingURL=index.js.map
