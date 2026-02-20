New-Item -ItemType Directory -Force -Path "public\images" | Out-Null

$downloads = @(
    @{ url = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop&crop=center&q=80"; out = "public\images\peixe.jpg" },
    @{ url = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop&crop=center&q=80"; out = "public\images\massa.jpg" },
    @{ url = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&crop=center&q=80"; out = "public\images\vegetariano.jpg" },
    @{ url = "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=400&fit=crop&crop=center&q=80"; out = "public\images\ovos.jpg" },
    @{ url = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop&crop=center&q=80"; out = "public\images\frutos_do_mar.jpg" }
)

foreach ($d in $downloads) {
    Write-Host "Downloading $($d.out)..."
    Invoke-WebRequest -Uri $d.url -OutFile $d.out -UseBasicParsing
}

Write-Host "DONE"
