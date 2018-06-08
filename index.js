module.exports = f => new Proxy(class {}, {
	construct: (target, args) => f(...args)
});
