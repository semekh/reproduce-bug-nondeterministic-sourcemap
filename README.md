How to reproduce?
=================

1. Run `yarn`
2. Run `yarn run build:twice`
3. Observe that the output shows difference between the generated sourcemaps:

```
Files dist.1/@mf-types.zip and dist.2/@mf-types.zip differ
Files dist.1/static/js/376.f8323c4f.js.map and dist.2/static/js/376.f8323c4f.js.map differ
Files dist.1/static/js/federation_provider.4af44738.js.map and dist.2/static/js/federation_provider.4af44738.js.map differ
Files dist.1/static/js/lib-polyfill.ce9a96fd.js.map and dist.2/static/js/lib-polyfill.ce9a96fd.js.map differ
```

4. Run `USE_V1=1 yarn run build:twice`
5. Observe that there is no diff
