# 🚀 Setup Projet Python Moderne avec UV

## ÉTAPE 1 : Installation des outils de base

```powershell
# Dans PowerShell mode admin
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Vérification
uv --version

# Création du projet
uv init mon-projet
cd mon-projet
```

---

## ÉTAPE 2 : Activation de l'environnement virtuel

```powershell
.venv\Scripts\Activate.ps1
```

> ⚠️ Si erreur, créer manuellement : `uv venv`

---

## ÉTAPE 3 : Installation des outils essentiels

**Outils installés :**

-   **ruff** : Linter + formatter (qualité du code)
-   **mypy** : Vérification des types statiques
-   **loguru** : Logger moderne
-   **python-dotenv** : Gestion variables d'environnement

```powershell
# Outils de développement
uv add --dev ruff mypy pre-commit vulture

# Dépendances runtime
uv add loguru python-dotenv
```

---

## ÉTAPE 4 : Configuration des outils

### Initialisation Git

```bash
git init
```

### Création des fichiers de configuration

#### 📄 `.env`

```ini
# Ne JAMAIS commit ce fichier dans Git
DEBUG=True
LOG_LEVEL=INFO
```

#### 📄 `.gitignore`

```
.env
.venv/
__pycache__/
*.pyc
.mypy_cache/
.ruff_cache/
```

#### 📄 `ruff.toml`

```toml
line-length = 88
target-version = "py312"

[lint]
select = ["E", "F", "I"]
ignore = []
```

#### 📄 `.pre-commit-config.yaml`

```yaml
repos:
    - repo: https://github.com/astral-sh/ruff-pre-commit
      rev: v0.8.4
      hooks:
          - id: ruff
            args: [--fix]
          - id: ruff-format
```

---

## ÉTAPE 5 : Test de l'installation

### Créer `main.py`

```python
from loguru import logger
from dotenv import load_dotenv
import os

load_dotenv()

logger.info(f"DEBUG mode: {os.getenv('DEBUG')}")
logger.success("✅ Environnement configuré correctement!")
```

### Vérifier le code

```bash
# Formate ton code
ruff format .

# Vérifie la qualité
ruff check .

# Détecter le code mort
vulture .

# Nettoyer les imports
ruff check --select F401 --fix .

# Fix automatique des erreurs
ruff check --fix main.py

# Exécute
python main.py
```

---

## ÉTAPE 6 : Configuration et utilisation de Pre-commit

```bash
pre-commit install
pre-commit run --all-files
```

---

## ÉTAPE 7 : Premier commit

```bash
git add .
git commit -m "Initial setup: uv, ruff, pre-commit, pytest"

```

> 🎯 Pre-commit vérifiera automatiquement ton code avant chaque commit !

---

## ✅ Setup terminé !

**Tu es maintenant prêt à développer avec :**

-   ⚡ Gestion ultra-rapide des dépendances (uv)
-   🔍 Qualité de code automatique (ruff)
-   🛡️ Vérification des types (mypy)
-   📝 Logs modernes (loguru)
-   🔒 Contrôle qualité Git (pre-commit)

```

```
