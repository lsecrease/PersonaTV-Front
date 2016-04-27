const requireAll = (requireContext) => {
    requireContext.keys().map(requireContext);
};

requireAll(require.context('./specs/', true, /\.js$/));