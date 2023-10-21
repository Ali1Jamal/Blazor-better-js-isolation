# Better JsIsolation for Blazor
Organize your JavaScript/TypeScript isolation scripts in a similar way like CSS isolation in Blazor.
you can use npm/yarn packages in blazor.<br>
we are going to use rollup.js to make this happening.<br>
to improve the preformance of build time just remove these lines from .csproj
```xml
<Target Name="PostBuild" AfterTargets="PostBuildEvent">
  <Exec Condition="$(Configuration) == 'Debug'" Command="npm run build" />
  <Exec Condition="$(Configuration) == 'Release'" Command="npm run build" />
</Target>
```
However, please note that if you remove these lines, you will need to build the scripts manually. You can do so with the following commands:
`npm run build`
or
`npm run watch`
