import type { ProviderInfo } from '~/types/model';
import { useEffect } from 'react';
import type { ModelInfo } from '~/lib/modules/llm/types';

interface ModelSelectorProps {
  model?: string;
  setModel?: (model: string) => void;
  provider?: ProviderInfo;
  setProvider?: (provider: ProviderInfo) => void;
  modelList: ModelInfo[];
  providerList: ProviderInfo[];
  apiKeys: Record<string, string>;
  modelLoading?: string;
}

export const ModelSelector = ({
  model,
  setModel,
  provider,
  setProvider,
  modelList,
  providerList,
  modelLoading,
}: ModelSelectorProps) => {
  // Load enabled providers from cookies

  // Update enabled providers when cookies change
  useEffect(() => {
    // If current provider is disabled, switch to first enabled provider
    if (providerList.length == 0) {
      return;
    }

    if (provider && !providerList.map((p) => p.name).includes(provider.name)) {
      const firstEnabledProvider = providerList[0];
      setProvider?.(firstEnabledProvider);

      // Also update the model to the first available one for the new provider
      const firstModel = modelList.find((m) => m.provider === firstEnabledProvider.name);

      if (firstModel) {
        setModel?.(firstModel.name);
      }
    }
  }, [providerList, provider, setProvider, modelList, setModel]);

  if (providerList.length === 0) {
    return (
      <div className="mb-2 p-4 rounded-lg border border-qbuildr-elements-borderColor bg-qbuildr-elements-prompt-background text-qbuildr-elements-textPrimary">
        <p className="text-center">
          No providers are currently enabled. Please enable at least one provider in the settings to start using the
          chat.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-3 -mt-32 flex gap-2 flex-wrap">
      <div className="flex gap-2 flex-wrap">
        {providerList.map((providerOption: ProviderInfo) => (
          <button
            key={providerOption.name}
            onClick={() => {
              if (setProvider) {
                setProvider(providerOption);
              }

              const firstModel = modelList.find((m) => m.provider === providerOption.name);

              if (firstModel && setModel) {
                setModel(firstModel.name);
              }
            }}
            className={`px-4 py-2 rounded-lg border transition-all ${
              provider?.name === providerOption.name
                ? 'border-qbuildr-elements-focus bg-qbuildr-elements-focus font-bold'
                : 'border-qbuildr-elements-borderColor bg-qbuildr-elements-prompt-background text-qbuildr-elements-textPrimary hover:border-qbuildr-elements-focus'
            }`}
          >
            {providerOption.name}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {modelLoading === 'all' || modelLoading === provider?.name ? (
          <div className="relative left-25 mt-6 px-4 py-2 rounded-lg border border-qbuildr-elements-borderColor bg-qbuildr-elements-prompt-background text-qbuildr-elements-textPrimary">
            Loading...
          </div>
        ) : (
          <select
            value={model}
            onChange={(e) => setModel?.(e.target.value)}
            className="relative left-25 mt-6 px-4 py-2  rounded-lg max-w-54 border border-qbuildr-elements-borderColor bg-qbuildr-elements-prompt-background text-qbuildr-elements-textPrimary hover:border-qbuildr-elements-focus focus:border-qbuildr-elements-focus outline-none"
          >
            {modelList
              .filter((e) => e.provider === provider?.name && e.name)
              .map((modelOption, index) => (
                <option key={index} value={modelOption.name}>
                  {modelOption.label}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
};
