using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text;

namespace BlazorBetterJsIsolation.Extensions;

public static class IJSExtensions
{
    public static async Task<IJSObjectReference> ComponentModule(this IJSRuntime js, ComponentBase component)
    {
        var type = component.GetType();
        var sb = new StringBuilder("./js/");
        sb!.Append(type.FullName!.Remove(0, type.Assembly!.GetName().Name!.Length + 1).Replace(".", "/"));
        sb.Append(".js");

        var result = await js.InvokeAsync<IJSObjectReference>("import", sb.ToString());
        return result;
    }

}

