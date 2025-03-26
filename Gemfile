source 'https://rubygems.org'

gem "github-pages", group: :jekyll_plugins  # Let GitHub manage Jekyll dependencies

# Other required plugins that are not included in GitHub Pages by default
group :other_plugins do
    gem 'httparty'
    gem 'feedjira'
    # Add this: only include `uri` gem when running in CI (e.g., GitHub Actions)
    gem 'uri', '0.10.1' if ENV['CI']
end

