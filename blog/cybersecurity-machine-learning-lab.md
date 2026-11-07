# Cybersecurity Machine Learning Lab

**Tag:** Machine Learning
**Date:** 7 November 2026
**Read time:** 2 min read
**Slug:** `cybersecurity-machine-learning-lab.html`

I've put together a Cybersecurity Machine Learning Lab, a downloadable training environment built around realistic, synthetically generated security datasets. The lab includes exercises for training classifiers, examining predictions, investigating false positives and false negatives, and working out how changing parameters improves or worsens results (F1 and Train F1).

The lab includes four datasets:

- **Phishing emails:** classifiers to distinguish phishing from legitimate emails, investigate false positives and improve detection.
- **Endpoint / EDR telemetry:** classify suspicious process behaviour and examine how legitimate activity can resemble malicious execution.
- **Security alert triage:** regression algorithms to predict investigation time and understand prediction errors.
- **Network activity:** clustering and anomaly detection to identify behaviour patterns and unusual network connections.

The environment is fully configured, uses Python, pandas, NumPy, scikit-learn and matplotlib. It includes ready to run scripts, CSV datasets, visualisations and progressive exercises.

It took me 10 hours to walk through 6 supervised and 4 unsupervised learning algorithms with training classifiers, adjusting feature parameters and weights before, during and after fitting the model, in very realistic SOC scenarios. The repository includes educational write up of solutions based on the dataset examples.

Particularly useful for cybersecurity analysts, malware researchers, detection engineers and anyone developing practical AI security skills. The laboratory repo is on my GitHub: [https://github.com/lucas-link-code/cyber-ML-lab](https://github.com/lucas-link-code/cyber-ML-lab)
