import { useState } from 'react';
import { Copy, Check, RotateCcw, Link as LinkIcon, AlertCircle, Info } from 'lucide-react';
import { useCustomShareUrl } from '../hooks/useCustomShareUrl';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';

export function ShareLinkSection() {
  const { activeShareUrl, saveCustomUrl, resetUrl } = useCustomShareUrl();
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    if (!inputValue.trim()) {
      setValidationError('');
      return;
    }

    const result = saveCustomUrl(inputValue.trim());
    if (result.success) {
      setValidationError('');
      setInputValue('');
    } else {
      setValidationError(result.error || 'Invalid URL');
    }
  };

  const handleReset = () => {
    resetUrl();
    setInputValue('');
    setValidationError('');
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Card className="w-full max-w-[600px] bg-white/95 backdrop-blur-sm shadow-message">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-romantic-deep">
          <LinkIcon className="w-5 h-5" />
          Share Link
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Publishing guidance notice */}
        <Alert className="border-romantic-accent/30 bg-romantic-accent/5">
          <AlertCircle className="h-4 w-4 text-romantic-accent" />
          <AlertDescription className="text-sm text-romantic-dark">
            <strong>Important:</strong> This page may be in draft or preview mode. To make your changes publicly live, use the <strong>"Publish / Push Live"</strong> action button in the platform interface (outside this page).
          </AlertDescription>
        </Alert>

        {/* Current deployed link */}
        <div className="space-y-2">
          <Label className="text-romantic-dark flex items-center gap-1.5">
            Current Link
            <span className="text-xs text-romantic-text/60 font-normal">(this deployment)</span>
          </Label>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 bg-muted rounded-md border border-border text-sm break-all">
              {window.location.origin}
            </div>
            <Button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.origin);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                } catch (error) {
                  console.error('Failed to copy:', error);
                }
              }}
              variant="outline"
              size="icon"
              className="shrink-0"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Troubleshooting hint */}
        <Alert className="border-romantic-text/20 bg-romantic-text/5">
          <Info className="h-4 w-4 text-romantic-text/70" />
          <AlertDescription className="text-xs text-romantic-text/70">
            <strong>Troubleshooting:</strong> If someone cannot open your link, ensure the app is published using "Publish / Push Live", try a different browser or network, and note that DNS changes may take time to propagate globally.
          </AlertDescription>
        </Alert>

        {/* Custom URL section */}
        <div className="pt-2 border-t border-romantic-text/10">
          <p className="text-sm text-romantic-text/70 mb-3">
            Optionally set a custom URL for sharing this page. You must configure your own domain's DNS/hosting to point to this app.
          </p>

          <div className="space-y-2">
            <Label htmlFor="custom-url" className="text-romantic-dark">
              Custom URL (optional)
            </Label>
            <div className="flex gap-2">
              <Input
                id="custom-url"
                type="url"
                placeholder="https://your-domain.com"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setValidationError('');
                }}
                className="flex-1"
              />
              <Button onClick={handleSave} variant="default" className="bg-romantic-accent hover:bg-romantic-accent/90">
                Set
              </Button>
            </div>
            {validationError && (
              <p className="text-sm text-destructive">{validationError}</p>
            )}
          </div>

          {/* Active custom URL display (only if different from origin) */}
          {activeShareUrl !== window.location.origin && (
            <>
              <div className="space-y-2 mt-3">
                <Label className="text-romantic-dark">Active Custom URL</Label>
                <div className="flex gap-2">
                  <div className="flex-1 px-3 py-2 bg-muted rounded-md border border-border text-sm break-all">
                    {activeShareUrl}
                  </div>
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    size="icon"
                    className="shrink-0"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Reset button */}
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full mt-3"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset to Default URL
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
